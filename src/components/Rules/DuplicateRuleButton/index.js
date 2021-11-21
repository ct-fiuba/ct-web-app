import React from 'react';
import { Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import useStyles from './styles';

export default function DuplicateRuleButton({id, duplicateRule}) {
	const classes = useStyles();

  const handleDuplicateRule = () => {
    duplicateRule(id);
  };

  return (
    <div>
      <Button className={classes.button} size="small" variant="outlined" color="primary" onClick={handleDuplicateRule}>
        <FileCopyIcon />
      </Button>
    </div>
  );
}
