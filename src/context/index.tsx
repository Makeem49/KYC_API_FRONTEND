import ClientsContextProvider, { useClientxCtx } from './clients_context';

// Context wrapper for all the context managers
const ContextProvider = (props: WithChildren) => {
  return <ClientsContextProvider>{props.children}</ClientsContextProvider>;
};

export { useClientxCtx };

export default ContextProvider;
