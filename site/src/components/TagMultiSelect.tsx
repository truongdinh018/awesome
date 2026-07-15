import { ChipMultiSelect } from './ChipMultiSelect'
import { tagHue } from '../domainLabels'

type Props = {
  tags: string[]
  value: string[]
  onChange: (next: string[]) => void
}

export function TagMultiSelect({ tags, value, onChange }: Props) {
  return (
    <ChipMultiSelect
      options={tags.map((tag) => ({
        value: tag,
        label: tag,
        hue: tagHue(tag),
      }))}
      value={value}
      onChange={onChange}
      placeholderEmpty="Gõ để chọn tag…"
      placeholderMore="Thêm tag…"
      menuLabel="Gợi ý tags"
    />
  )
}
