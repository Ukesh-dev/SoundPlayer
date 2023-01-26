import { Children, isValidElement } from 'react'
import { InstrumentName } from 'soundfont-player'
import { normalizeLabel } from '../InstrumentOptions'

type SelectProps = {
  value: string
  children: React.ReactNode
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}
export const Select = ({ children, value, ...props }: SelectProps) => {
  const allChildren = Children.map(children, (child) => {
    if (isValidElement<{ value: string }>(child)) {
      return child
    }
  })

  const displayedValue = allChildren?.find((child) =>
    child.props.value === value ? child : null
  )
  const valueToBeDisplayed =
    displayedValue?.props.value ?? 'Please Select Instrument'

  return (
    <div className="relative w-60 py-2  bg-black mx-auto">
      <select
        className="bg-slate-400  w-full opacity-0 hover:cursor-pointer text-black"
        value={value}
        {...props}
      >
        {children}
      </select>
      <div className="absolute inset-0 flex items-center justify-between z-10 text-white pointer-events-none px-2">
        <span className="">
          {normalizeLabel(valueToBeDisplayed as InstrumentName)}
        </span>
        <span>&#9067;</span>
      </div>
    </div>
  )
}
