const dummyData = [
        {
            id: 1,
            type: 'TASK',
            metadata: {
                name: 'Task 1',
                detail: 'Detail for task 1',
                due_time: '2023-05-21T12:34:56.789Z',
            },
            created_at: '2023-04-21T12:34:56.789Z',
            updated_at: '2023-04-21T12:34:56.789Z'
        },
        {
            id: 2,
            type: 'TASK',
            metadata: {
                name: 'Task 2',
                detail: 'Detail for task 2',
                due_time: '2023-05-21T12:34:56.789Z',
            },
            created_at: '2023-01-15T08:23:45.678Z',
            updated_at: '2023-01-15T08:23:45.678Z'
        },
        {
            id: 3,
            type: 'TASK',
            metadata: {
                name: 'Task 3',
                detail: 'Detail for task 3',
                due_time: '2023-05-21T12:34:56.789Z',
            },
            created_at: '2023-02-10T16:45:34.567Z',
            updated_at: '2023-02-10T16:45:34.567Z'
        },
        {
            id: 4,
            type: 'TASK',
            metadata: {
                name: 'Task 4',
                detail: 'Detail for task 4',
                due_time: '2023-05-21T12:34:56.789Z',
            },
            created_at: '2023-03-20T11:12:23.456Z',
            updated_at: '2023-03-20T11:12:23.456Z'
        },
        {
            id: 5,
            type: 'EVENT',
            metadata: {
                title: 'Event 1',
                description: 'Description for event 1',
                start_time: '10:00:00',
                end_time: '11:00:00',
            },
            created_at: '2023-01-01T09:00:00.000Z',
            updated_at: '2023-01-01T09:00:00.000Z'
        },
        {
            id: 6,
            type: 'EVENT',
            metadata: {
                title: 'Event 2',
                description: 'Description for event 2',
                start_time: '12:00:00',
                end_time: '13:00:00',
            },
            activity_id: 2,
            created_at: '2023-02-01T11:00:00.000Z',
            updated_at: '2023-02-01T11:00:00.000Z'
        },
    ]

    export default dummyData;
