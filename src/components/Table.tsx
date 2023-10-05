import React from 'react';

interface TableProps {
  titles: string[];
  list: object[];
}

export default function Table(props: TableProps) {
  const { titles, list } = props;

  interface Title {
    name: string;
    key: number;
  }

  interface Content {
    value: string | React.JSX.Element;
    key: number;
  }

  interface Element {
    contents: Content[];
    key: number;
  }

  const tableTitles: Title[] = titles.map((title, index) => {
    return { key: index, name: title };
  });

  const tableList: Element[] = list.map((element, index) => {
    return {
      contents: Object.values(element).map((content, elementIndex) => {
        return { value: content, key: elementIndex };
      }),
      key: index,
    };
  });

  return (
    <table>
      {titles.length === 0 ? (
        <thead>
          <tr>
            {tableTitles.map((title) => (
              <td key={title.key}>{title.name}</td>
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {tableList.map((elements) => (
          <tr key={elements.key}>
            {elements.contents.map((content) => (
              <td key={content.key}>{content.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
