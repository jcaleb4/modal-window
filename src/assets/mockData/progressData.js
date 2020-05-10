const progressData = {
    taskTitle: 'Engagement Process',
    taskDescription: '2019 Fall Oncology Advisory Board',
    overallStatus: 'Abandoned',
    createdTime: new Date('01/31/2020').getTime(),
    steps: [
        {
            title: 'Draft',
            lastUpdated: new Date('01/31/2020').getTime(),
            lastUpdatedTitle: 'Created on',
            complete: true,
        },
        {
            title: 'Pending Approval',
            lastUpdated: new Date('02/14/2020').getTime(),
            lastUpdatedTitle: 'Approval sent',
            complete: true,
        },
        {
            title: 'Approved',
            lastUpdated: new Date('02/20/2020').getTime(),
            lastUpdatedTitle: 'Abandoned on',
            complete: false,
        },
        {
            title: 'Execute',
            lastUpdated: null,
            lastUpdatedTitle: null,
            complete: false,
        },
        {
            title: 'Concluded',
            lastUpdated: null,
            lastUpdatedTitle: null,
            complete: false,
        },
        {
            title: 'Closed',
            lastUpdated: null,
            lastUpdatedTitle: null,
            complete: false,
        },
    ]
}

export default progressData;