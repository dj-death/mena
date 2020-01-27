var files = [{
    filename: 'Specification.pdf',
    lastAccess: 2
}, {
    filename: 'Conditions.pdf',
    lastAccess: 4
}];


var notifications = {
    count: 2,
    items: [
        { date: "24/01/2020", title: "Payment", content: "Danny Wannagat sent you a payment of $40.00" },
        { date: "20/01/2020", title: "Payment",content: "Scheduled payment of $153.51 from Upwork via Direct to Local Bank transfer account." }
    ]
};

var messages = {
    unreadCount: 4
};

var calls = [
    {
        date: new Date(2020, 0, 13, 13, 24, 50),
        number: '066672586612',
        duration: 1.12,
        cost: 5,
        listen: 1,
        status: 4,
        notes: "Client need support"
    },
    {
        date: new Date(2020, 0, 13, 13, 24, 50),
        number: '066672586612',
        duration: 1.12,
        cost: 5,
        listen: 1,
        status: 5,
        notes: "Client worried"
    },
    {
        date: new Date(2020, 0, 13, 13, 24, 50),
        number: '066672586612',
        duration: 1.12,
        cost: 5,
        listen: 1,
        status: 2,
        notes: "Client need support"
    },
    {
        date: new Date(2020, 0, 13, 13, 24, 50),
        number: '066672586612',
        duration: 1.12,
        cost: 5,
        listen: 1,
        status: 3,
        notes: "Client need support"
    }
];

var callingList = [{
    name: "James Johnson",
    country: "USA",
    number: "+1 443434 332",
    status: 2,
    notes: "...",
    completed: false,
    cost: 8
}, {
    name: "Tom Hanks",
    country: "Canada",
    number: "+2 232434 332",
    status: 1,
    notes: "...",
    completed: true,
    cost: 11
}];

var agents = [
    {
        id: 1,
        firstname: "John",
        lastname: "DOE",
        name: "John DOE",
        country: "USA",
        state: "New York",
        specialities: ["Technology Sales", "Hotel Sales", "Holiday Booking"],
        workingHours: {
            week:  {
                startHour: 8, endHour: 18
            },
            
            weekend: {
                startHour: 9,
                endHour: 13
            }
        },
        sampleVoice: '',
        assignedTime: 10,
        remainingTime: 4,

        ratings: 4,
        totalEarnings: 5100,
        projectsCount: 5,
        phone: "+1 234 567 8910",
        bio: "Redhead, Innovator, Saviour of Mankind, Hopeless Romantic, Attractive 20-something Yogurt Enthusiast"
    },
    {
        id: 2,
        firstname: "Thomas",
        lastname: "Shelby",
        name: "Thomas Shelby",
        country: "USA",
        state: "New York",
        phone: "+1 234 567 8910",
        specialities: ["Technology Sales", "Hotel Sales", "Holiday Booking"],
        workingHours: {
            week:  {
                startHour: 8, endHour: 18
            },
            
            weekend: {
                startHour: 9,
                endHour: 13
            }
        },
        
        sampleVoice: '',
        totalEarnings: 5100,
        ratings: 4,
        projectsCount: 5,
        assignedTime: 15,
        remainingTime: 5,
        bio: "Redhead, Innovator, Saviour of Mankind, Hopeless Romantic, Attractive 20-something Yogurt Enthusiast"
    }
];



var projects = [
    {
        id: 56456,
        title: "Project 1",
        description: "Special project about tech sales",
        callsCount: 10,
        sales: 12000,
        billCost: 55.8,
        agentCost: 125.8,
        status: "Live",
        agents: agents,
        calls: calls,
        hoursWorked: 100,
        earnings: 500,
        callingList: callingList,

        duration: 6,
        // Payment Complete, Payment In Progress, Project Complete, Project in Progress
        paymentStatus: "Payment Complete",
        files: files
    },
    {
        id: 56486,
        title: "Project 2",
        description: "Special project about tech sales",
        callsCount: 25,
        sales: 800,
        billCost: 45,
        agentCost: 125.8,
        status: "Ended",
        agents: agents,
        calls: calls,
        hoursWorked: 100,
        earnings: 500,
        callingList: callingList,

        duration: 4,
        // Payment Complete, , Project Complete, Project in Progress
        paymentStatus: "Project Complete",
        files: files
    }, {
        id: 756602,
        title: "Project 3",
        description: "Special project about tech sales",
        callsCount: 56,
        sales: 800,
        billCost: 45,
        agentCost: 205.8,
        status: "Ended",
        agents: agents,
        calls: calls,
        hoursWorked: 100,
        earnings: 500,
        callingList: callingList,
        duration: 3,
        // Payment Complete, , Project Complete, 
        paymentStatus: "Payment In Progress",
        files: files
    }
];


var cards = [
    { type: 'visa', ending: '6755', expires: '10/2025'},
    { type: 'mastercard', ending: '7885', expires: '10/2020'}
];

var payments = [
    {
        id: 'EEE569956',
        date: '12/01/2019',
        project: 'Project 1',
        description: 'First Payment',
        agent: 'Peter M',
        amount: 2500
    },
    {
        id: 'EEE569957',
        date: '12/08/2019',
        project: 'Project 1',
        agent: 'Peter M',
        description: 'Second Payment',
        amount: 3000
    },
    {
        id: 'EEE569958',
        date: '12/11/2019',
        project: 'Project 2',
        description: 'Final Payment',
        agent: 'Tony M',
        amount: 2500
    }
];

var apiKey = "A1B2E33";

var clients = [{
    id: 15612,
    name: 'Cat Grooming'
}, {
    id: 56468,
    name: 'Michel Odd'
}];

var requests = [{
    client: clients[0],
    duration: 14,
    price: 1500,
    project: projects[0]
}, {
    client: clients[1],
    duration: 5,
    price: 500,
    project: projects[1]
}];



var user = {
    username : "Paul",
    messages: messages,
    notifications: notifications
};

module.exports = {
    user: user,
    files: files,
    projects: projects,
    agents: agents,
    payments: payments,
    cards: cards,
    calls: calls,
    apiKey: apiKey,
    requests: requests,
    callingList: callingList
};