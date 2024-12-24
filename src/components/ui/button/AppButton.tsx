const AppButton = ({label}: {label: string}) => {
  return (
    <button
      className="bg-primary rounded-2xl text-[#363636] py-1 px-5"
    >{label}</button>
  )
}

export default AppButton