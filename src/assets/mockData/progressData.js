const progressData = {
    taskTitle: 'Engagement Process',
    taskDescription: '2019 Fall Oncology Advisory Board',
    overallStatus: 'Abandoned',
    createdTime: new Date('01/31/2020').getTime(),
    steps: [
        {
            order: 1,
            title: 'Draft',
            lastUpdated: new Date('01/31/2020').getTime(),
            lastUpdatedTitle: 'Created on',
            complete: true,
        },
        {
            order: 3,
            title: 'Approved',
            lastUpdated: new Date('02/20/2020').getTime(),
            lastUpdatedTitle: 'Abandoned on',
            complete: false,
        },
        {
            order: 4,
            title: 'Execute',
            lastUpdated: null,
            lastUpdatedTitle: null,
            complete: false,
        },
        {
            order: 5,
            title: 'Concluded',
            lastUpdated: null,
            lastUpdatedTitle: null,
            complete: false,
        },
        {
            order: 6,
            title: 'Closed',
            lastUpdated: null,
            lastUpdatedTitle: null,
            complete: false,
        },
        {
            order: 2,
            title: 'Pending Approval',
            lastUpdated: new Date('02/14/2020').getTime(),
            lastUpdatedTitle: 'Approval sent',
            complete: true,
        },
    ]
}

export default progressData;