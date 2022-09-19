# Query사용 우선 순위 

[react testing Priority](https://testing-library.com/docs/queries/about/#priority)
- 모든 사람에게 접근 가능한 쿼리를 사용해야함.
- 보조기구를 사용하는 사람들의 경험을 반영하는 쿼리.  
  -  Role을 넣어줘야지 element를 잡아올때 이상적임. (**getByRole**을 사용)
  - i -> 대문자 소문자 상관없이 해당하는 글자 체크. 
  - getByTestId는 가장 마지막 우선순위에 있음. 
- fireEvent 보다 **userEvent**를 사용해서 element 클릭해주는게 좋음.
  - userEvent는 fireEvent에서 이것저것 기능 추가를 한 것.