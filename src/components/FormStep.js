function FormStep({ children, isCurrentStep }) {
  if (!isCurrentStep) return null;

  return <div>{children}</div>;
}

export default FormStep;
