const API_SLAITEIO = process.env.NEXT_PUBLIC_SLAITEIO_API

function getToken() {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('token')
    }
}

export function loginUser(payload: any) {
    return fetch(`${API_SLAITEIO}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}

export function registerUser(payload: any) {
    return fetch(`${API_SLAITEIO}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}

export function createSchedule(payload: any) {
    return fetch(`${API_SLAITEIO}/api/schedule`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
} 

export function updateSchedule(payload: any, id: number) {
    return fetch(`${API_SLAITEIO}/api/schedule/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function deleteSchedule(id: number) {
    return fetch(`${API_SLAITEIO}/api/schedule/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
    })
}

export function getSchedulesByUser(user_email: string) {
    return fetch(`${API_SLAITEIO}/api/schedule/user/${user_email}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
    })
}

export function getScheduleDetail(schedule_id: number) {
    return fetch(`${API_SLAITEIO}/api/schedule/${schedule_id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
    })
}

export function createEvent(payload: any) {
    return fetch(`${API_SLAITEIO}/api/event`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function createTask(payload: any) {
    return fetch(`${API_SLAITEIO}/api/task`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`,
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
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function deleteActivity(activity_id: number) {
    return fetch(`${API_SLAITEIO}/api/activity/${activity_id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
    })
}

export function createNotification(payload: any) {
    return fetch(`${API_SLAITEIO}/api/notification`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function updateNotification(payload: any, notification_id: number) {
    return fetch(`${API_SLAITEIO}/api/notification/${notification_id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(payload)
    })
}

export function getNotificationsByActivity(activity_id: number){
    return fetch(`${API_SLAITEIO}/api/notification/${activity_id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken}`,
            'Content-Type': 'application/json'
        }, 
    })
}