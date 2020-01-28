<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentsRepository")
 */
class Comments
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Comments;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Users", inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Products", inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;

        /**
     * @ORM\Column(type="date")
     */
    private $Dcomment;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getComments(): ?string
    {
        return $this->Comments;
    }

    public function setComments(string $Comments): self
    {
        $this->Comments = $Comments;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getProduct(): ?Products
    {
        return $this->product;
    }

    public function setProduct(?Products $product): self
    {
        $this->product = $product;

        return $this;
    }


    public function getDcomment(): ?\DateTimeInterface
    {
        return $this->Dcomment;
    }

    public function setDcomment(\DateTimeInterface $Dcomment): self
    {
        $this->Dcomment = $Dcomment;

        return $this;
    }
}
