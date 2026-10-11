import { useSupabase } from '@/hooks'
import { withRequestOptions } from '@/api/providers/supabase/query'
import type { ApiRequestOptions } from '@/types/api/request'

const { supabase, responseHandle } = useSupabase()

export async function fetchPeopleAnalyticsOverview(
  params: {
    asOfDate?: string
    periodMonths?: number
  } = {},
  options?: ApiRequestOptions
) {
  return await responseHandle<Api.Hr.PeopleAnalyticsOverview>(
    () =>
      withRequestOptions(
        supabase.rpc('hr_people_analytics_overview_secure', {
          p_as_of_date: params.asOfDate || null,
          p_period_months: params.periodMonths ?? 12
        }),
        options
      ),
    { showErrorMessage: true }
  )
}
