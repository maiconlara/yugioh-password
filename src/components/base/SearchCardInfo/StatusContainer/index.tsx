interface StatusContainerProps {
  atk: string | number;
  def: string | number;
  zeroStatus: boolean | number;
  linkValue: string | number | undefined;
}

const StatusContainer = ({
  atk,
  def,
  zeroStatus,
  linkValue,
}: StatusContainerProps) => {
  return (
    <div className="flex flex-row w-full gap-8 justify-center">
      {atk || def || zeroStatus ? (
        <>
          <p className="text-sm font-regular">Ataque: {atk}</p>
          {linkValue ? (
            <p className="text-sm font-bold">LINK-{linkValue}</p>
          ) : (
            <p className="text-sm font-regular">Defesa: {def}</p>
          )}
        </>
      ) : null}
    </div>
  );
};
export default StatusContainer;
