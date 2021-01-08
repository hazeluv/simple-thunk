import React from "react";

function ExampleComponent(props) {
  const { exampleArray, actions, someData } = props;

  React.useEffect(() => {
    actions.setArray(["Test1", "test2", "test3"]);
  }, []);

  React.useEffect(() => {
    actions.getSomeData();
  }, []);

  return (
    <div>
      {JSON.stringify(exampleArray)} <br />
      {JSON.stringify(someData)}
    </div>
  );
}

export default ExampleComponent;
