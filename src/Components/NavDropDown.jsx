export let NavDropDown = ({
  value,
  position,
  hover,
}) => {
  return (
    <>
      <section className={`drop relative none ${position} ${hover}`}>
        {value.map((e) => {
          return (
            <p
              key={e}
              className="gap-8 paragraph-1 drop-child"
            >
              {e}
            </p>
          );
        })}
      </section>
    </>
  );
};
