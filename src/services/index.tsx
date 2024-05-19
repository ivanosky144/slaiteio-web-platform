
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

