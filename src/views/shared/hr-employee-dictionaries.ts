/**
 * 员工档案页面共用的字典类型清单。
 *
 * 员工档案详情与员工档案编辑展示同一批字段，字典清单必须保持一致，
 * 因此集中在此处维护，避免两处清单漂移。
 */
export const HR_EMPLOYEE_DICTIONARY_CODES = [
  'sex',
  'hrEmploymentStatus',
  'hrEmploymentType',
  'hrEducationLevel',
  'hrEthnicity',
  'hrMaritalStatus',
  'hrPoliticalStatus',
  'hrEmergencyRelation',
  'hrContractType',
  'hrContractStatus',
  'hrDegree',
  'hrTrainingType',
  'hrTrainingResult',
  'hrRewardType',
  'hrRewardLevel'
] as const
