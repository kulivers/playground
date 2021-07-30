export const codeText = `const SomeComponent = () => {
  return <div>some component</div>;
};
const SomeComponent2 = () => {
  return <div>some component2</div>;
};

const components = {
  fst: {
    component: SomeComponent,
    link: "/someComponent",
  },
  scd: {
    component: SomeComponent2,
    link: "/someComponent2",
  },
};

const DinamicNameExample = (props) => {
  const [name, setName] = useState("fst");
  const DinamicComponent = components[name].component; //!!important

  useEffect(() => {
    const interval = setInterval(() => {
      setName((name) => {
        return name === "fst" ? "scd" : "fst";
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        name: {name}
        <DinamicComponent />
    </div>
  );
};`;
