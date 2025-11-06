// Zoom integration
export async function POST(request: Request) {
  const { topic, startTime, duration } = await request.json()

  const zoomResponse = await fetch("https://api.zoom.us/v2/users/me/meetings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.ZOOM_JWT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic,
      type: 2, // Scheduled meeting
      start_time: startTime,
      duration,
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: false,
        waiting_room: true,
      },
    }),
  })

  return Response.json(await zoomResponse.json())
}
