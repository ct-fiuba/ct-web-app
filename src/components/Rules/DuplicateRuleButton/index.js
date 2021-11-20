import React from 'react';
import { Button } from '@material-ui/core';
import ContentCopyIcon from '@material-ui/icons/FileCopy';

export default function DuplicateRuleButton({id, duplicateRule}) {
  const handleDuplicateRule = () => {
    duplicateRule(id);
  };

  return (
    <div>
      <Button size="small" variant="outlined" color="primary" onClick={handleDuplicateRule}>
        <ContentCopyIcon />
      </Button>
    </div>
  );
}
