import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from './src/redux/store'

const AllTheProviders = ({ children }: { children: ReactNode } ) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const customRender = (ui: any, options = {}) =>
  render(ui, {
    
    wrapper: AllTheProviders,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
