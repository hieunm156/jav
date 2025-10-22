import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import {
  CANCELLED,
  COMPLETED,
  CONFIRMED,
  IN_PROGRESS,
  UNCONFIRMED,
} from "src/app/core/constant/order.constant";
import { OrderService } from "src/app/core/services/order.service";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.scss"],
})
export class ExchangeComponent implements OnInit {
  loading: boolean = false;
  breadCrumbItems: Array<{}>;
  term;
  returns: any[];
  navActive = 0;
  count: number;
  codeBill: any;
  order: any;
  modalExchange: NgbModalRef;
  formData: FormGroup;
  @ViewChild("exchangeModal") exchangeModal: any;
  constructor(
    private orderService: OrderService,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {
    // this.loading = true;
    this.breadCrumbItems = [
      { label: "Đổi trả" },
      { label: "Đơn hàng", active: true },
    ];
  }

  ngOnInit(): void {
    this.loading = true;
    this.codeBill = this.route.snapshot.queryParamMap.get("code");
    if (this.codeBill) {
      this.orderService.findOrderByCode(this.codeBill).subscribe({
        next: (value) => {
          this.order = value;
          this.openModal();
          this.loading = false;
        },
        error: (error) => {},
      });
    }
    this.orderService.findReturnByStatus(UNCONFIRMED).subscribe({
      next: (res) => {
        this.returns = res;
        this.count = this.returns.length;
        this.loading = false;
      },
    });
  }

  openModal() {
    this.modalExchange = this.modalService.open(this.exchangeModal, {
      size: "lg",
      backdrop: false,
      windowClass: "custom-modal",
    });
  }
  getOrder(i: number) {
    if (i != this.navActive) {
      this.navActive = i;
      this.loading = true;
      if (i === 0) {
        this.orderService.findReturnByStatus(UNCONFIRMED).subscribe({
          next: (res) => {
            this.returns = res;
            this.count = res.length;
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          },
        });
      } else if (i === 1) {
        this.orderService.findReturnByStatus(CONFIRMED).subscribe({
          next: (res) => {
            this.returns = res;
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          },
        });
      } else if (i === 2) {
        this.orderService.findReturnByStatus(IN_PROGRESS).subscribe({
          next: (res) => {
            this.returns = res;
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          },
        });
      } else if (i === 3) {
        this.orderService.findReturnByStatus(COMPLETED).subscribe({
          next: (res) => {
            this.returns = res;
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          },
        });
      } else if (i === 4) {
        this.orderService.findReturnByStatus(CANCELLED).subscribe({
          next: (res) => {
            this.returns = res;
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          },
        });
      }
    }
  }
  onLoadingChanged = (loading, count) => {
    this.loading = loading;
    if (count) {
      this.count = count;
    }
  };
}
