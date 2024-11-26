import type { ReactNode } from "react";

function isCustomContent<T>(h: TableHeader<T> | CustomTableHeader): h is CustomTableHeader {
  return h.type === "custom";
}
// TODO: need refactoring

type ItemType = { id: string } & Record<string, unknown>;
type KeyType<T> = keyof T extends string ? keyof T : string;

type CustomTableHeader = {
  type: "custom";
  key: string;
  label?: string;
  render?: (opt: { key: string; label?: string }) => ReactNode;
  width?: number | string;
  ratio?: number;
  classname?: string;
};

export type TableHeader<T> =
  | {
      key: KeyType<T>;
      type?: undefined;
      label?: string;
      render?: (opt: { key: string; label?: string }) => ReactNode;
      width?: number | string;
      ratio?: number;
      classname?: string;
    }
  | CustomTableHeader;

export type TableContents<T> = {
  [key in keyof Partial<T>]: {
    render?: (props: { value: T[key]; id: string }) => ReactNode;
  };
};

export type CustomTableContents = {
  [key in string]: {
    render?: (props: { id: string }) => ReactNode;
  };
};

export type TableOptions<T> = {
  header: Array<TableHeader<T>>;
  content: TableContents<T>;
  customContent?: CustomTableContents;
};

export type TableProps<T extends ItemType> = {
  items: Array<T>;
  options: TableOptions<T>;
};

function renderHeader<T>(h: TableHeader<T>) {
  return h.render ? h.render({ key: h.key, label: h.label }) : (h.label ?? h.key);
}

function renderContent<T extends ItemType>(v: T, h: TableHeader<T>, c: TableContents<T>) {
  const tableOption = c[h.key];
  const value = v[h.key];
  return tableOption?.render ? tableOption.render({ value, id: v.id }) : String(value);
}
function renderCustomContent<T extends ItemType>(v: T, h: CustomTableHeader, c?: CustomTableContents) {
  const id = v.id;
  const tableOption = c?.[h.key];
  return tableOption?.render ? tableOption.render({ id }) : "";
}

function Table<T extends ItemType>({ items, options }: TableProps<T>) {
  return (
    <div className="overflow-y-auto max-h-[100%] w-full">
      <table className="w-full border-collapse relative ">
        <colgroup>
          {options.header.map((h) => (
            <col key={h.key} style={{ width: h.ratio ? `${h.ratio}%` : h.width }} />
          ))}
        </colgroup>
        <thead className="sticky top-0 bg-white">
          <tr className="border-b border-gray-200">
            {options.header.map((h) => (
              <th
                className={`pb-3 text-left font-medium text-gray-500 text-center ${h.classname} sticky top-0`}
                key={h.key}
              >
                {renderHeader(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="border-b border-gray-200" key={item.id}>
              {options.header.map((h) => (
                <td className="py-3" key={h.key}>
                  {isCustomContent(h)
                    ? renderCustomContent(item, h, options.customContent)
                    : renderContent(item, h, options.content)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
