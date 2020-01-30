import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  let wrapper;
  let mockSearchCards = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchForm searchCards={mockSearchCards}/>);
  });

  it("renders a form for news searching", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should keep track of search terms as entered using updateSearchTerm", () => {
    const mockEvent = {
        target: {
            value: "testPhrase"
        }
    };

    wrapper.instance().updateSearchTerm(mockEvent);
    expect(wrapper.state("searchTerm")).toEqual("testPhrase");
  });

  it("should be able to kick off a search with the entered value using runSearch", () => {
    const mockEvent1 = {
        target: {
            value: "testPhrase"
        }
    };
    const mockEvent2 = { preventDefault: jest.fn() };

    wrapper.instance().updateSearchTerm(mockEvent1);
    wrapper.instance().runSearch(mockEvent2);

    expect(mockSearchCards).toHaveBeenCalledWith("testPhrase");
    expect(wrapper.state("searchTerm")).toEqual("");
  });
});
