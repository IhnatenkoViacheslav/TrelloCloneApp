import { FC } from 'react'

interface IHeading {
  title: string
}

const Heading: FC<IHeading> = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="my-3 h-0.5 bg-primary w-full" />
    </div>
  )
}

export default Heading
