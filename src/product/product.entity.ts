import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  price: number;

  @Column({ type: "timestamp", default: () => "NOW()" })
  created_at: Date;

  @Column({ type: "timestamp", default: () => "NOW()", onUpdate: "NOW()" })
  updated_at: Date;
}
