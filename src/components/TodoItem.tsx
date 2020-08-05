import React from 'react';
import {
  Box,
  Flex,
  Divider,
  Text,
  IconButton,
  useToast,
} from '@chakra-ui/core';

import { Todo } from '../stores/todo-store';
import { TodoStore } from '../stores/todo-store';

interface ITodoItemProps extends Todo {
  hasDivider: boolean;
  removeTodo: TodoStore['removeTodo'];
  toggleTodo: TodoStore['toggleTodo'];
}

const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  title,
  completed,
  hasDivider,
  removeTodo,
  toggleTodo,
}) => {
  const toast = useToast();

  const handleRemoveTodo = (id: string) => {
    removeTodo(id);
    toast({
      title: 'Success',
      description: 'Todo removed',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex p="10px" alignItems="center">
        <Text
          cursor="pointer"
          onClick={() => toggleTodo(id)}
          isTruncated
          flex="1"
          textDecoration={completed ? 'line-through' : 'none'}
        >
          {title}
        </Text>
        <Box>
          <IconButton
            ml="2"
            aria-label="Delete todo"
            icon="delete"
            variantColor="red"
            onClick={() => handleRemoveTodo(id)}
          />
        </Box>
      </Flex>
      {hasDivider && <Divider />}
    </>
  );
};

export default TodoItem;
