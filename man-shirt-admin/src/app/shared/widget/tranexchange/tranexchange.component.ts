import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { UNCONFIRMED } from "src/app/core/constant/order.constant";
import { OrderService } from "src/app/core/services/order.service";

@Component({
  selector: "app-tranexchange",
  templateUrl: "./tranexchange.component.html",
  styleUrls: ["./tranexchange.component.scss"],
})
export class TranexchangeComponent implements OnInit {
  @Input() returns: any[];
  @Input() onLoadingChanged: (loading: boolean, count?: any) => void;
  constructor(
    private orderService: OrderService,
    private toasrService: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.returns);
  }

  confirm(data: any) {
    this.onLoadingChanged(true);
    this.orderService.updateDangGiaoReturn(data.id).subscribe({
      next: (res) => {
        this.toasrService.info("Xác nhận đơn hàng trả " + data.code);
        this.orderService.findReturnByStatus(UNCONFIRMED).subscribe({
          next: (res) => {
            this.returns = res;
            this.onLoadingChanged(false, res.length);
          },
        });
      },
      error: (err) => {
        this.toasrService.error("Vui lòng thử lại");
        this.onLoadingChanged(false);
      },
    });
  }
  cancel(data: any) {
    this.onLoadingChanged(true);
    this.orderService.updateTuChoiReturn(data.id).subscribe({
      next: (res) => {
        this.toasrService.info("Từ chối đơn hàng trả " + data.code);
        this.orderService.findReturnByStatus(UNCONFIRMED).subscribe({
          next: (res) => {
            this.returns = res;
            this.onLoadingChanged(false, res.length);
          },
        });
      },
      error: (err) => {
        this.toasrService.error("Vui lòng thử lại");
        this.onLoadingChanged(false);
      },
    });
  }
  completed(data: any) {}
  failed(data: any) {}
}
