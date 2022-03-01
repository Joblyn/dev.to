import React from "react";
import { Container, Form, Inner, SearchInput, Button } from "./style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export default function HeaderSearch() {
  return (
    <Container>
      <Form>
        <input name="utf8" type="hidden" value="✓" />
        <Inner>
          <div>
            <SearchInput placeholder="Search..." autoComplete="off" type="text"/>
            <Button className="c-btn">
              <SearchIcon />
            </Button>
          </div>
        </Inner>
      </Form>
    </Container>
  );
}
