import useStyles from "./css/sidebar.style";

export default () => {
  const {styles, cx} = useStyles();

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className={styles.aside}>
      <div className={styles.description}>您可以将这些节点拖到上面的画布中</div>
      <div
        className={cx(styles.dndnode)}
        onDragStart={(event) => onDragStart(event, "StringNode")}
        draggable
      >
        String Node
      </div>
      <div
        className={styles.dndnode}
        onDragStart={(event) => onDragStart(event, "BasicNode")}
        draggable
      >
        BasicNode Node
      </div>
      <div
        className={cx(styles.dndnode)}
        onDragStart={(event) => onDragStart(event, "EditNode")}
        draggable
      >
        EditNode Node
      </div>
    </div>
  );
};
