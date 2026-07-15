import { ChipMultiSelect } from './ChipMultiSelect'
import { domainHue, domainLabel } from '../domainLabels'

type Props = {
  domains: string[]
  value: string[]
  onChange: (next: string[]) => void
}

export function DomainMultiSelect({ domains, value, onChange }: Props) {
  return (
    <ChipMultiSelect
      options={domains.map((domain) => ({
        value: domain,
        label: domainLabel(domain),
        hue: domainHue(domain),
      }))}
      value={value}
      onChange={onChange}
      placeholderEmpty="Gõ để chọn domain…"
      placeholderMore="Thêm domain…"
      menuLabel="Gợi ý domain"
    />
  )
}
