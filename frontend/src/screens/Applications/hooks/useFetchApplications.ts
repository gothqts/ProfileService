import useHttpLoaderWithServerError from 'shared/hooks/httpLoader/useHttpLoaderWithServerError'
import { useEffect, useState } from 'react'
import { IApplication } from 'screens/Applications/applications.types'
import applicationsApi from 'screens/Applications/application.api'

const useFetchApplications = () => {

  const { wait, loading, serverError } = useHttpLoaderWithServerError()
  const [applications, setApplications] = useState<IApplication[]>([])
  useEffect(() => {
    wait(applicationsApi.getApplications(), (resp) => {
      if (resp.status === 'success') {
        setApplications(resp.body)
      }
    })
  }, [])
  return {
    applications,
    loading,
    serverError,
  }
}
export default useFetchApplications