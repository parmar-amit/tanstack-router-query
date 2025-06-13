import ContactDetails from '../../components/pages/contacts/ContactDetails';

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactDetails />;
}
