
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title DonationContract
 * @dev Smart contract for managing donations to projects
 */
contract DonationContract {
    // Constants
    uint256 public constant PLATFORM_FEE_PERCENT = 5;
    
    // Structs
    struct Donation {
        address donor;
        uint256 amount;
        uint256 timestamp;
    }
    
    struct Project {
        string id;
        address payable recipient;
        uint256 goalAmount;
        uint256 raisedAmount;
        bool active;
        string proofCid;
        mapping(address => uint256) donorContributions;
        Donation[] donations;
    }
    
    // State variables
    address public owner;
    mapping(string => Project) public projects;
    string[] public projectIds;
    
    // Events
    event ProjectCreated(string indexed projectId, address recipient, uint256 goalAmount);
    event DonationReceived(string indexed projectId, address donor, uint256 amount, uint256 timestamp);
    event ProofUpdated(string indexed projectId, string proofCid);
    
    // Constructor
    constructor() {
        owner = msg.sender;
    }
    
    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
    modifier projectExists(string memory projectId) {
        require(projects[projectId].recipient != address(0), "Project does not exist");
        _;
    }
    
    // Functions
    function createProject(
        string memory projectId,
        address payable recipient,
        uint256 goalAmount,
        string memory proofCid
    ) external onlyOwner {
        require(projects[projectId].recipient == address(0), "Project already exists");
        
        Project storage newProject = projects[projectId];
        newProject.id = projectId;
        newProject.recipient = recipient;
        newProject.goalAmount = goalAmount;
        newProject.raisedAmount = 0;
        newProject.active = true;
        newProject.proofCid = proofCid;
        
        projectIds.push(projectId);
        
        emit ProjectCreated(projectId, recipient, goalAmount);
    }
    
    function donate(string memory projectId) external payable projectExists(projectId) {
        require(msg.value > 0, "Donation must be greater than 0");
        require(projects[projectId].active, "Project is not active");
        
        Project storage project = projects[projectId];
        
        // Calculate platform fee
        uint256 platformFee = (msg.value * PLATFORM_FEE_PERCENT) / 100;
        uint256 donationAmount = msg.value - platformFee;
        
        // Update project state
        project.raisedAmount += donationAmount;
        project.donorContributions[msg.sender] += donationAmount;
        
        // Record donation
        project.donations.push(Donation({
            donor: msg.sender,
            amount: donationAmount,
            timestamp: block.timestamp
        }));
        
        // Transfer funds
        project.recipient.transfer(donationAmount);
        payable(owner).transfer(platformFee);
        
        emit DonationReceived(projectId, msg.sender, donationAmount, block.timestamp);
    }
    
    function updateProof(string memory projectId, string memory proofCid) 
        external 
        projectExists(projectId) 
    {
        Project storage project = projects[projectId];
        require(msg.sender == project.recipient || msg.sender == owner, "Not authorized");
        
        project.proofCid = proofCid;
        
        emit ProofUpdated(projectId, proofCid);
    }
    
    function getProjectCount() external view returns (uint256) {
        return projectIds.length;
    }
    
    function getDonationCount(string memory projectId) 
        external 
        view 
        projectExists(projectId) 
        returns (uint256) 
    {
        return projects[projectId].donations.length;
    }
    
    function getDonation(string memory projectId, uint256 index) 
        external 
        view 
        projectExists(projectId) 
        returns (address, uint256, uint256) 
    {
        require(index < projects[projectId].donations.length, "Invalid index");
        Donation memory donation = projects[projectId].donations[index];
        return (donation.donor, donation.amount, donation.timestamp);
    }
    
    function getDonorContribution(string memory projectId, address donor) 
        external 
        view 
        projectExists(projectId) 
        returns (uint256) 
    {
        return projects[projectId].donorContributions[donor];
    }
}
