"use client";

import { Menu } from "@headlessui/react";

export default function Home() {
  return (
    <main>
      <Menu>
        <Menu.Button>More</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <span>Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </main>
  );
}
