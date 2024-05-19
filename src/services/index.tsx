
const API_SLAITEIO = process.env.NEXT_PUBLIC_SLAITEIO_API


export function createSchedule(payload: any) {
    return fetch(`${API_SLAITEIO}/api/schedule`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
} 

export function updateSchedule(payload: any, id: number) {
    return fetch(`${API_SLAITEIO}/api/schedule/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function deleteSchedule(id: number) {
    return fetch(`${API_SLAITEIO}/api/schedule/${id}`, {
        method: 'DELETE'
    })
}

export function getSchedulesByUser(user_id: number) {
    return fetch(`${API_SLAITEIO}/api/schedule/user/${user_id}`, {
        method: 'GET'
    })
}

export function createEvent(payload: any) {
    return fetch(`${API_SLAITEIO}/api/event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function createTask(payload: any) {
    return fetch(`${API_SLAITEIO}/api/task`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function updateEvent(payload: any, event_id: number) {
    return fetch(`${API_SLAITEIO}/api/event/${event_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function updateTask(payload: any, task_id: number) {
    return fetch(`${API_SLAITEIO}/api/task/${task_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function deleteActivity(activity_id: number) {
    return fetch(`${API_SLAITEIO}/api/activity/${activity_id}`, {
        method: 'DELETE',
    })
}

export function createNotification(payload: any) {
    return fetch(`${API_SLAITEIO}/api/notification`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function updateNotification(payload: any, notification_id: number) {
    return fetch(`${API_SLAITEIO}/api/notification/${notification_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function getNotificationsByActivity(activity_id: number){
    return fetch(`${API_SLAITEIO}/api/notification/${activity_id}`, {
        method: 'GET'
    })
}