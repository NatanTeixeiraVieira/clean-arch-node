export abstract class Entity<Props = Object> {
  constructor(protected readonly props: Props) {}

  toJSON(): Props {
    return {...this.props}
  }
}