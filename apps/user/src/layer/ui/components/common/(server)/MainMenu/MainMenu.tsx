import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@repo/ui/components/ui/menubar";
function MainMenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <p className="font-semibold text-sm">Menu</p>
        </MenubarTrigger>
        <MenubarContent className="px-2 min-w-fit">
          <MenubarGroup className="p-2">
            <h4>Publications</h4>
            <MenubarItem>Paper</MenubarItem>
            <MenubarItem disabled>Column</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup className="p-2">
            <h4>Content</h4>
            <MenubarItem disabled>Community</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup className="p-2">
            <h4>About Me</h4>
            <MenubarItem disabled>Developer Profile</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default MainMenu;
