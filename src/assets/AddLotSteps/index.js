import React from 'react'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import StepFour from './stepFour'

export default [
  (pr) => <StepOne {...pr} />,
  (pr) => <StepTwo {...pr} />,
  (pr) => <StepThree {...pr} />,
  (pr) => <StepFour {...pr} />,
]
