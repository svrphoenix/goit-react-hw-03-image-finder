import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 0 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
`;

export const ErrMessage = styled(ErrorMessage)`
  position: absolute;
  right: 16px;
  font-size: 14px;
  color: red;
`;