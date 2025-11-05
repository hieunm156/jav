import { Injectable, HostListener } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HomeService } from "./home.service";
import { discount } from "../classes/product";

// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  image?: string;
  active?: boolean;
  badge?: boolean;
  badgeText?: string;
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService {
  constructor(private homeService: HomeService) {
    this.homeService.findAllDiscount().subscribe((discounts) => {
      const children: any[] = [];
      discounts.forEach((discount) => {
        children.push({
          path: "/shop/sale/" + discount.name.replace(" ", "-"),
          title: discount.name,
          type: "link",
        });
      });
      this.MENUITEMS.push({
        title: "SALE",
        type: "sub",
        active: false,
        children: children,
      });
    });
  }

  public screenWidth: any;
  public leftMenuToggle: boolean = false;
  public mainMenuToggle: boolean = false;

  // Windows width
  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

  MENUITEMS: Menu[] = [
    {
      path: "/shop/san-pham-moi",
      title: "SẢN PHẨM MỚI",
      type: "link",
    },
    {
      title: "SẢN PHẨM",
      type: "sub",
      megaMenu: true,
      active: false,
      children: [
        {
          image:
            "https://bizweb.dktcdn.net/thumb/grande/100/438/408/themes/904142/assets/link_image_3_1.jpg?1684898909571",
        },
        {
          title: "ÁO PHÔNG NAM",
          type: "sub",
          active: false,
          children: [
            {
              path: "/shop",
              title: "Áo phông tay ngắn",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo phông tay dài",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo phông in hình",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo phông trơn",
              type: "link",
            },
          ],
        },
        {
          title: "ÁO SƠ MI NAM",
          type: "sub",
          active: false,
          children: [
            {
              path: "/shop",
              title: "Áo sơ mi cổ điển",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo sơ mi slim fit",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo sơ mi dài tay",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo sơ mi trắng",
              type: "link",
            },
          ],
        },
        {
          title: "ÁO KHOÁC NAM",
          type: "sub",
          active: false,
          children: [
            {
              path: "/shop",
              title: "Áo khoác bomber",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo khoác da nam",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo khoác dù nam",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo khoác jean nam",
              type: "link",
            },
          ],
        },
        {
          title: "ÁO LEN NAM",
          type: "sub",
          active: false,
          children: [
            {
              path: "/shop",
              title: "Áo len cổ tròn",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo len cổ V",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo len dài tay",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo len đan móc",
              type: "link",
            },
          ],
        },
        {
          title: "ÁO HOODIE NAM",
          type: "sub",
          active: false,
          children: [
            {
              path: "/shop",
              title: "Áo hoodie không mũ",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo hoodie có mũ",
              type: "link",
            },
            {
              path: "/shop",
              title: "Áo hoodie dài tay",
              type: "link",
            },
          ],
        },
      ],
    },
    {
      title: "BỘ SƯU TẬP",
      type: "sub",
      badge: true,
      badgeText: "new",
      active: false,
      children: [
        {
          path: "/shop",
          title: "Thể thao",
          type: "link",
        },
        {
          path: "/shop",
          title: "Xuân/Hè 2023",
          type: "link",
        },
        {
          path: "/shop",
          title: "Thời trang công sở",
          type: "link",
        },
        {
          path: "/shop",
          title: "Những anh em FA",
          type: "link",
        },
      ],
    },
    {
      title: "LIÊN HỆ",
      type: "sub",
      active: false,
      children: [
        {
          path: "/shop",
          title: "Ưu đãi & chính sách",
          type: "link",
        },
        {
          path: "/shop",
          title: "Thông tin liên hệ",
          type: "link",
        },
      ],
    },
    {
      path: "/blog",
      title: "BLOGS",
      type: "link",
    },
  ];

  LEFTMENUITEMS: Menu[] = [
    {
      title: "clothing",
      type: "sub",
      megaMenu: true,
      active: false,
      children: [
        {
          title: "mens fashion",
          type: "link",
          active: false,
          children: [
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "top", type: "link" },
            { path: "/home/fashion", title: "bottom", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "shirts", type: "link" },
            { path: "/home/fashion", title: "bottom", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
          ],
        },
        {
          title: "women fashion",
          type: "link",
          active: false,
          children: [
            { path: "/home/fashion", title: "dresses", type: "link" },
            { path: "/home/fashion", title: "skirts", type: "link" },
            { path: "/home/fashion", title: "westarn wear", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "bottom", type: "link" },
            { path: "/home/fashion", title: "ethic wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "sports wear", type: "link" },
            { path: "/home/fashion", title: "bottom wear", type: "link" },
          ],
        },
      ],
    },
  ];

  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
  leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);
}
