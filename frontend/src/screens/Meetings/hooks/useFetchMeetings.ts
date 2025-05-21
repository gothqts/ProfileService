import useHttpLoaderWithServerError from 'shared/hooks/httpLoader/useHttpLoaderWithServerError.ts'
import { useEffect, useState } from 'react'
import meetingsApi from 'screens/Meetings/meetings.api.ts'
import { IMeeting } from 'screens/Meetings/meetings.types.ts'

const useFetchMeetings = () => {

  const { wait, loading, serverError } = useHttpLoaderWithServerError()
  const [meetings, setMeetings] = useState<IMeeting[]>([])
  useEffect(() => {
    wait(meetingsApi.getMeetings(), (resp) => {
      if (resp.status === 'success') {
        setMeetings(resp.body)
      }
    })
  }, [])
  return {
    meetings,
    loading,
    serverError,
  }
}
export default useFetchMeetings