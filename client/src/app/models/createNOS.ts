export class NOSDetails {
  unitCode: '';
  credits: '';
  unitTitle: '';
  descriptionOfOccupationalStandard: '';
  scopeOfOccupationalStandard: '';
  NSQF: '';
  sectors: {
    sectorID: string,
    sectorName: string,
    subSectorID: string,
    subSectorName: string
  } = {
      sectorID: '1',
      sectorName: 'Agriculture',
      subSectorID: '12',
      subSectorName: 'Farming'
    };

  scope: {
    scopeDescription: string,
    scopePoints: Array<string>
  } = {
      scopeDescription: '',
      scopePoints: []
    };

  PerformanceCriteria: {
    performanceCriteriaDescription: string,
    performanceCriteriaElements: [
      {
        element: string,
        performanceCriteriaValues: [
          {
            pcID: string,
            pcDescription: string
          }
        ]
      }
    ]
  } = {
      performanceCriteriaDescription: '',
      performanceCriteriaElements: [
        {
          element: '',
          performanceCriteriaValues: [
            {
              pcID: '',
              pcDescription: ''
            }
          ]
        }
      ]
    };

  KnowledgeAndUnderstanding: {
    organizationalContext: {
      organizationalContextDescription: string,
      organizationalContextValues: [
        {
          ocID: string,
          ocValues: string
        }
      ]
    }
  } = {
      organizationalContext: {
        organizationalContextDescription: '',
        organizationalContextValues: [
          {
            ocID: '',
            ocValues: ''
          }
        ]
      }
    };

  technicalKnowledge: {
    technicalKnowledgeDescription: string,
    technicalKnowledgeValues: [
      {
        tkID: string,
        tkValues: string,
      }
    ]
  } = {
      technicalKnowledgeDescription: '',
      technicalKnowledgeValues: [
        {
          tkID: '',
          tkValues: ''
        }
      ]
    };

  Skills: {
    coreGenericSkills: {
      coreSkillsDescription: string,
      writingSkills: {
        writingSkillsValues: [
          {
            wsID: string,
            wsValues: string
          }
        ]
      },
      readingSkills: {
        readingSkillsValues: [
          {
            rsID: string,
            rsValues: string
          }
        ]
      },
      oralCommunication: {
        oralCommunicationValues: [
          {
            ocID: string,
            ocValues: string
          }
        ]
      }
    }
  } = {
      coreGenericSkills: {
        coreSkillsDescription: '',
        writingSkills: {
          writingSkillsValues: [
            {
              wsID: '',
              wsValues: ''
            }
          ]
        },
        readingSkills: {
          readingSkillsValues: [
            {
              rsID: '',
              rsValues: ''
            }
          ]
        },
        oralCommunication: {
          oralCommunicationValues: [
            {
              ocID: '',
              ocValues: ''
            }
          ]
        }
      }
    };

  professionalSkills: {
    professionalSkillsDescription: string,
    decisionMaking: {
      decisionMakingValues: [{
        dmID: string,
        dmValues: string
      }]
    }
  } = {
      professionalSkillsDescription: '',
      decisionMaking: {
        decisionMakingValues: [{
          dmID: '',
          dmValues: ''
        }]
      }
    };

  planAndOrganize: {
    planAndOrganizeValues: [
      {
        poID: string,
        poValues: string
      }
    ]
  } = {
      planAndOrganizeValues: [
        {
          poID: '',
          poValues: ''
        }
      ]
    };

  customerCentricity: {
    customerCentricityValues: [
      {
        ccID: string,
        ccValues: string
      }
    ]
  } = {
      customerCentricityValues: [
        {
          ccID: '',
          ccValues: ''
        }
      ]
    };

  problemSolving: {
    problemSolvingValues: [
      {
        psID: string,
        psValues: string,
      }
    ]
  } = {
      problemSolvingValues: [
        {
          psID: '',
          psValues: ''
        }
      ]
    };

  analyticalThinking: {
    analyticalThinkingValues: [
      {
        anID: string,
        anValues: string
      }
    ]
  } = {
      analyticalThinkingValues: [
        {
          anID: '',
          anValues: ''
        }
      ]
    };

  criticalThinking: {
    criticalThinkingValues: [
      {
        ctID: string,
        ctValues: string
      }
    ]
  } = {
      criticalThinkingValues: [
        {
          ctID: '',
          ctValues: ''
        }
      ]
    };
}
