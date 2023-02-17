import { Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
const useStyles = createStyles((theme, _params, getRef) => ({
    label: {
      '&[data-checked]': {
        '&, &:hover': {
          backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
          color: theme.white,
        },
  
        [`& .${getRef('iconWrapper')}`]: {
          color: theme.white,
        },
      },
    },
  
    iconWrapper: {
      ref: getRef('iconWrapper'),
    },
  }));


function ChipsExample() {
    const [value, setValue] = useState(['react']);
    const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
    <Chip.Group position="center" multiple defaultValue={['react']}>
      <Chip classNames={classes} value="react">React</Chip>
      <Chip classNames={classes} value="ng">Angular</Chip>
      <Chip classNames={classes} value="vue">Vue</Chip>
      <Chip classNames={classes} value="svelte">Svelte</Chip>
    </Chip.Group>

    </div>
  );
}

export default ChipsExample;
