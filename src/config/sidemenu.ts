import { IScaffold2Group } from "react-declarative";

import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";

export const sidemenu: IScaffold2Group[] = [
  {
    id: "example_pages",
    label: "Example Pages",
    icon: PublicIcon,
    children: [
      {
        label: "Dashboard",
        id: "dashboard",
        icon: HomeIcon,
      },
      {
        label: "Todo list (decl)",
        id: "todos_list",
        icon: PlaylistAddCheckIcon,
      },
      {
        label: "Todo list (rad)",
        id: "todos_card",
        icon: PlaylistAddCheckIcon,
      },
      {
        label: "Сотрудники",
        id: "employees",
        icon: EmojiPeopleIcon,
      },
    ],
  },
];

export default sidemenu;
