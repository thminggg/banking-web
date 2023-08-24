import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function AccountDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <List>
      <p>{params.slug}</p>
      <ListItem divider>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
