import { DataItem, DataList } from "./styles/StatsCard.styled";

const StatsCard = ({list}) => {
  return (
    <DataList>
      {list.map((item, index) => {
        return (
          <DataItem key={index}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </DataItem>
        );
      })}
    </DataList>
  );
};

export default StatsCard;
