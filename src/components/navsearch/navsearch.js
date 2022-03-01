import React from "react";
import { Container, Form, Inner, SearchInput, Button } from "./style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export default function NavSearch() {
  return (
    <Container>
      <Form>
        <input name="utf8" type="hidden" value="✓" />
        <Inner>
          <div>
            <SearchInput />
            <Button>
              <SearchIcon />
            </Button>
          </div>
        </Inner>
      </Form>
    </Container>
  );
}
