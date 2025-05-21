import useHttpLoaderWithServerError from 'shared/hooks/httpLoader/useHttpLoaderWithServerError.ts'
import { useEffect, useState } from 'react'
import { IApplication } from 'screens/Applications/applications.types.ts'
import applicationsApi from 'screens/Applications/application.api.ts'

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